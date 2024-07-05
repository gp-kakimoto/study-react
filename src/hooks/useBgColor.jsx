import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

//const { useEffect } = require("react");

//const router = useRouter;
export const useBgColor = () => {
  const router = useRouter();
  const bgColor = useMemo(() => {
    //return router.pathname === "/" ? "lightblue" : "beige";
    switch (router.pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      default: {
        return "";
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    console.log(router);
    document.body.style.backgroundColor = bgColor;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
