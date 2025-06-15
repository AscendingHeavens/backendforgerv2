"use client"

import type React from "react"
import { useState } from "react"
import { Copy, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

const GoGenerator: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [selectedFramework, setSelectedFramework] = useState<string>("")
  const [selectedDatabase, setSelectedDatabase] = useState<string>("")
  const [projectName, setProjectName] = useState<string>("")
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false)

  const toggleDropdown = () => {
    setOpen((prev) => !prev)
  }

  const handleCopy = async () => {
    const codeSnippet = `backendforger create-go-app ${projectName} --framework ${selectedFramework} --database ${selectedDatabase}${
      selectedDatabase !== "mongodb" ? " --orm gorm" : ""
    }`

    try {
      await navigator.clipboard.writeText(codeSnippet)
      setIsButtonClick(true)
      setTimeout(() => {
        setIsButtonClick(false)
      }, 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const generateCommand = () => {
    return `backendforger create-go-app ${projectName} --framework ${selectedFramework} --database ${selectedDatabase}${
      selectedDatabase !== "mongodb" ? " --orm gorm" : ""
    }`
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Button
          onClick={toggleDropdown}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
          variant="default"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          Build Your Go App
        </Button>

        {isOpen && (
          <div className="w-full space-y-4">
            <Input
              type="text"
              className="w-full border-teal-300 focus:border-teal-500 focus:ring-teal-500"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              aria-label="Project Name"
            />

            <Select value={selectedFramework} onValueChange={setSelectedFramework}>
              <SelectTrigger className="w-full border-teal-300 focus:border-teal-500 focus:ring-teal-500">
                <SelectValue placeholder="Select Framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gin">Gin</SelectItem>
                <SelectItem value="echo">Echo</SelectItem>
                <SelectItem value="mux">Mux</SelectItem>
                <SelectItem value="fiber">Fiber</SelectItem>
                <SelectItem value="default http">Default HTTP</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDatabase} onValueChange={setSelectedDatabase}>
              <SelectTrigger className="w-full border-teal-300 focus:border-teal-500 focus:ring-teal-500">
                <SelectValue placeholder="Select Database" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="postgres">PostgreSQL</SelectItem>
                <SelectItem value="mysql">MySQL</SelectItem>
                <SelectItem value="sqlite">SQLite</SelectItem>
                <SelectItem value="mongodb">MongoDB</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {projectName && selectedFramework && selectedDatabase && (
          <div className="border border-teal-500 rounded-xl p-4 bg-teal-50 dark:bg-teal-950/20">
            <div className="flex items-start justify-between gap-2">
              <pre className="text-sm overflow-x-auto flex-1">
                <code className="text-slate-800 dark:text-slate-200">{generateCommand()}</code>
              </pre>
              <Button
                onClick={handleCopy}
                size="sm"
                variant="ghost"
                className="shrink-0 h-8 w-8 p-0 hover:bg-teal-100 dark:hover:bg-teal-900/20"
                aria-label="Copy Code"
              >
                {isButtonClick ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        )}
      </div>

      {isButtonClick && (
        <Alert
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-auto transition-all duration-500 ease-in-out bg-teal-50 border-teal-200 dark:bg-teal-950/20 dark:border-teal-800 ${
            isButtonClick ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <Info className="h-4 w-4 text-teal-600" />
          <AlertDescription className="text-teal-800 dark:text-teal-200">Code Copied</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default GoGenerator
