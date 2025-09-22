"use client";
import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js"); // ✅ loads only in browser
  }, []);

  return null;
}
