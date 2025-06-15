"use client"

import type React from "react"
import { useState } from "react"
import { Copy, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

const Python: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [selectedFramework, setSelectedFramework] = useState<string>("")
  const [selectedDatabase, setSelectedDatabase] = useState<string>("")
  const [projectName, setProjectName] = useState<string>("")
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false)

  const toggleDropdown = () => {
    setOpen(!isOpen)
  }

  const handleCopy = async () => {
    const codeSnippet = `backendforger create-python-app ${projectName} --framework ${selectedFramework} --database ${selectedDatabase}`
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
          Select Framework
        </Button>

        {isOpen && (
          <div className="w-full space-y-4">
            <Input
              type="text"
              className="w-full"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />

            <Select value={selectedFramework} onValueChange={setSelectedFramework}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flask">Flask</SelectItem>
                <SelectItem value="fastapi">FastAPI</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDatabase} onValueChange={setSelectedDatabase}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Database" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="postgres">Postgres</SelectItem>
                <SelectItem value="mysql">MySQL</SelectItem>
                <SelectItem value="sqlite">SQLite</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {projectName && selectedFramework && selectedDatabase && (
          <div className="border border-blue-500 rounded-xl p-4 bg-slate-50 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-2">
              <pre className="text-sm overflow-x-auto flex-1">
                <code className="text-slate-800 dark:text-slate-200">
                  {`backendforger create-python-app ${projectName} --framework ${selectedFramework} --database ${selectedDatabase}`}
                </code>
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

export default Python
