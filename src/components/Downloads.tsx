"use client";
import React, { useState } from "react";

const Collapse = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg my-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 text-xl font-medium bg-gray-100 hover:bg-gray-200 transition"
      >
        {title}
      </button>
      {open && <div className="px-4 py-3 bg-white border-t">{children}</div>}
    </div>
  );
};

const Downloads = () => {
  return (
    <div id="downloads" className="p-4 min-h-screen bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-2">INSTALLER</h1>
      <p className="text-center mb-6 text-gray-700">
        Here we are with our amazing forger to rapidly increase your productivity
      </p>

      <Collapse title="Windows Installer">
        <a
          href="https://backendforger.s3.ap-south-1.amazonaws.com/BackendforgerInstaller/backendforger_installer.exe"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Download for Windows
        </a>
      </Collapse>

      <Collapse title="MAC Installer">
        <Collapse title="PKG Installer">
          <Collapse title="PKG for MacOS AMD64">
            <p>Pkg Installer (link not available)</p>
          </Collapse>
          <Collapse title="PKG Installer for MacOS ARM64">
            <a
              href="https://backendforger.s3.ap-south-1.amazonaws.com/backendforger.pkg"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Download PKG for ARM64
            </a>
          </Collapse>
        </Collapse>

        <Collapse title="Homebrew Installer">
          <p className="text-gray-700">brew install backendforger</p>
        </Collapse>
      </Collapse>

      <Collapse title="Docker Command">
        <p className="text-gray-700">docker pull backendforger:latest</p>
      </Collapse>
    </div>
  );
};

export default Downloads;
