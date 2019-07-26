import React from "react";
import useDimensions from "react-use-dimensions";
import uri from "../../assets/loader.svg";

export default function Proyect(props) {
  const [ref, { x, y, width, height }] = useDimensions();
  const [url, setUrl] = React.useState(uri);
  const [style, setStyle] = React.useState({ width: "100%", height: "100%" });

  const [isInitialMount, setIsInitialMount] = React.useState(true);

  function getUrl() {
    if (!props.src || !width) return uri;
    var newUrl = "";
    if (process.env.IMG_ENV === "development") newUrl = `/${props.src}`;
    else {
      var finalWidth = props.width || Math.round(width / 50) * 50;
      var finalHeight = props.height || Math.round(height / 50) * 50;

      newUrl = `https://staging-img.nihu.link/${props.src}?width=${finalWidth}`;
      if (props.useHeight && finalHeight) newUrl += `&height=${finalHeight}`;
      if (props.height) newUrl += `&height=${props.finalHeight}`;
    }
    return newUrl;
  }

  React.useEffect(() => {
    setUrl(getUrl());
    setIsInitialMount(false);
  }, []);

  React.useEffect(() => {
    setUrl(getUrl());
  }, [width]);

  React.useEffect(() => {
    if (isInitialMount) return;

    if (url == uri) return setUrl(getUrl());

    setUrl("");
    setTimeout(() => {
      var smallWidth = props.width || Math.round(width / 25 / 50) * 50;
      setUrl(`https://staging-img.nihu.link/${props.src}?width=${5}`);
    }, 10);

    setTimeout(() => {
      setUrl(getUrl());
    }, 300);
  }, [props.src]);

  return (
    <div style={{ width: "100%", height: "100%" }} ref={ref}>
      <img style={style} src={url} alt="MiniPo" />
    </div>
  );
}
