import React from "react";

export class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      console.log("cache");
      this.renderMicroFrontend();
      return;
    }
    console.log("no-cache");

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        console.log({ manifest });

        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;

        console.log({ src: `${host}${manifest.files["main.js"]}` });

        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { name } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, history } = this.props;

    window[`render${name}`](`${name}-container`, history);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}
