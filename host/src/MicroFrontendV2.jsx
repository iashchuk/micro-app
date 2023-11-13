import axios from "axios";
import { useCallback, useLayoutEffect, useRef } from "react";

export const MicroFrontendV2 = ({ name, host, history }) => {
  const nameRef = useRef(name);
  const historyRef = useRef(history);
  const hostRef = useRef(host);

  useLayoutEffect(() => {
    nameRef.current = name;
    historyRef.current = history;
    hostRef.current = host;
  });

  const loadModule = useCallback(() => {
    const containerId = `${nameRef.current}-container`;
    const mountFunc = window[`render${nameRef.current}`];

    mountFunc(containerId, historyRef.current);
  }, []);

  useLayoutEffect(() => {
    const scriptId = `micro-frontend-script-${nameRef.current}`;
    const host = hostRef.current;

    if (document.getElementById(scriptId)) {
      loadModule();
      return;
    }

    axios.get(`${host}/asset-manifest.json`).then(({ data: manifest }) => {
      const script = document.createElement("script");
      script.id = scriptId;
      script.crossOrigin = "";
      script.src = `${host}${manifest.files["main.js"]}`;

      console.log({ a: `${host}${manifest.files["main.js"]}` });

      script.onload = loadModule;
      document.head.appendChild(script);
    });
  }, [loadModule]);

  useLayoutEffect(() => {
    return () => {
      const containerId = `${nameRef.current}-container`;
      const unmountFunc = window[`unmount${nameRef.current}`];

      unmountFunc(containerId);
    };
  }, []);

  return <main id={`${name}-container`} />;
};
