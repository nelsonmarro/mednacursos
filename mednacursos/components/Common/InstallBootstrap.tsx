"use client";

import React, { useEffect } from "react";

export const InstallBootstrap = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <></>;
};
