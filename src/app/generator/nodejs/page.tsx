"use client"

import type React from "react"
import { useState } from "react"
import { Copy, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

const Node: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string>("")
  const [selectedDatabase, setSelectedDatabase] = useState<string>("")
  const [projectName, setProjectName] = useState<string>("")
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false)

  const toggleDropdown = () => {
    setOpen((prev) => !prev)
  }

  const handleCopy = async () => {
    const drizzleFlag = ["mysql", "postgres"].includes(selectedDatabase) ? " --orm drizzle" : ""
    const codeSnippet = `backendforger create-node-app ${projectName} ${
      selectedLanguage === "typescript" ? "--typescript" : ""
    } --framework express ${selectedDatabase ? `--database ${selectedDatabase}` : ""}${drizzleFlag}`

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
    const drizzleFlag = ["mysql", "postgres"].includes(selectedDatabase) ? " --orm drizzle" : ""
    return `backendforger create-node-app ${projectName} ${
      selectedLanguage === "typescript" ? "--typescript " : ""
    }--framework express ${selectedDatabase ? `--database ${selectedDatabase} ` : ""}${drizzleFlag}`
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Button
          onClick={toggleDropdown}
          className="w-full"
          variant="outline"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          Build Your Node App
        </Button>

        {isOpen && (
          <div className="w-full space-y-4">
            <Input
              type="text"
              className="w-full"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              aria-label="Project Name"
            />

            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="typescript">TypeScript</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDatabase} onValueChange={setSelectedDatabase}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Database" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mongodb">MongoDB</SelectItem>
                <SelectItem value="mysql">MySQL</SelectItem>
                <SelectItem value="postgres">PostgreSQL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {projectName && selectedLanguage && selectedDatabase && (
          <div className="border border-blue-500 rounded-xl p-4 bg-slate-50 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-2">
              <pre className="text-sm overflow-x-auto flex-1">
                <code className="text-slate-800 dark:text-slate-200">{generateCommand()}</code>
              </pre>
              <Button
                onClick={handleCopy}
                size="sm"
                variant="ghost"
                className="shrink-0 h-8 w-8 p-0"
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
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-auto transition-all duration-500 ease-in-out ${
            isButtonClick ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <Info className="h-4 w-4" />
          <AlertDescription>Code Copied</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default Node
