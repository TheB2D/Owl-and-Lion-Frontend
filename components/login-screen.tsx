"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { UserRole } from "@/app/page"

interface LoginScreenProps {
  onLogin: (role: UserRole) => void
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-[#8B1538] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O&L</span>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#8B1538]">Owl & Lion Access</h1>
              <p className="text-sm text-gray-600">Foothill & De Anza Colleges</p>
            </div>
          </div>
          <p className="text-gray-700 font-serif">Disability-Focused Student-Tutor Platform</p>
        </div>

        {/* Login Form */}
        <Card className="border-2 border-gray-200">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-serif text-[#8B1538]">Welcome Back</CardTitle>
            <CardDescription className="font-serif">Sign in to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-serif">
                Email
              </Label>
              <Input id="email" type="email" placeholder="your.email@student.fhda.edu" className="font-serif" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-serif">
                Password
              </Label>
              <Input id="password" type="password" className="font-serif" />
            </div>

            {/* Role Selection */}
            <div className="space-y-3 pt-4">
              <Label className="font-serif text-sm font-medium">I am a:</Label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => onLogin("student")}
                  variant="outline"
                  className="h-12 font-serif border-2 border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white transition-colors"
                >
                  Student
                </Button>
                <Button
                  onClick={() => onLogin("tutor")}
                  variant="outline"
                  className="h-12 font-serif border-2 border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white transition-colors"
                >
                  Tutor
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-600 font-serif">
          Need help? Contact{" "}
          <a href="mailto:support@fhda.edu" className="text-[#8B1538] hover:underline">
            support@fhda.edu
          </a>
        </div>
      </div>
    </div>
  )
}
