"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/ui/mode-toggle"
import type { UserRole } from "@/app/page"
import { useEffect } from "react"

interface LoginScreenProps {
  onLogin: (role: UserRole) => void
}

const onLogin2 = () => {
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");
  let accessToken = null;

  // Get the current authority (host + optional port)
  const authority = window.location.host;  // e.g. "localhost:8000"

  // Construct the redirect_uri using current protocol + authority
  const redirectUri = `${window.location.protocol}//${authority}`;

  // URL-encode redirect_uri
  const encodedRedirectUri = encodeURIComponent(redirectUri);

  // Build the login URL with the dynamic redirect_uri
  const loginUrl = `https://us-west-2ttuysti65.auth.us-west-2.amazoncognito.com/login?client_id=5duv42nb7jfvuq0kuctin87irc&response_type=code&scope=email+openid+profile&redirect_uri=${encodedRedirectUri}`;

  document.location = loginUrl;
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    console.log(code);
  }, []); // Empty dependency array = run only once


  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-end mb-4">
            <ModeToggle />
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-[#8B1538] dark:bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O&L</span>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#8B1538] dark:text-primary">Owl & Lion Access</h1>
              <p className="text-sm text-muted-foreground">Foothill & De Anza Colleges</p>
            </div>
          </div>
          <p className="text-muted-foreground font-serif">Disability-Focused Student-Tutor Platform</p>
        </div>

        {/* Login Form */}
        <Card className="border-2 border-border bg-card">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-serif text-[#8B1538] dark:text-primary">Welcome Back</CardTitle>
            <CardDescription className="font-serif">Sign in to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 pt-4">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => onLogin2()}
                  variant="outline"
                  className="h-12 font-serif border-2 border-[#8B1538] dark:border-primary text-[#8B1538] dark:text-primary hover:bg-[#8B1538] dark:hover:bg-primary hover:text-white transition-colors"
                >
                  Log in
                </Button>
                <Button
                  onClick={() => onRegister()}
                  variant="outline"
                  className="h-12 font-serif border-2 border-[#8B1538] dark:border-primary text-[#8B1538] dark:text-primary hover:bg-[#8B1538] dark:hover:bg-primary hover:text-white transition-colors"
                >
                  Register
                </Button>
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-3 pt-4">
              <Label className="font-serif text-sm font-medium">I am a:</Label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => onLogin("student")}
                  variant="outline"
                  className="h-12 font-serif border-2 border-[#8B1538] dark:border-primary text-[#8B1538] dark:text-primary hover:bg-[#8B1538] dark:hover:bg-primary hover:text-white transition-colors"
                >
                  Student
                </Button>
                <Button
                  onClick={() => onLogin("tutor")}
                  variant="outline"
                  className="h-12 font-serif border-2 border-[#8B1538] dark:border-primary text-[#8B1538] dark:text-primary hover:bg-[#8B1538] dark:hover:bg-primary hover:text-white transition-colors"
                >
                  Tutor
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground font-serif">
          Need help? Contact{" "}
          <a href="mailto:support@fhda.edu" className="text-[#8B1538] dark:text-primary hover:underline">
            support@fhda.edu
          </a>
        </div>
      </div>
    </div>
  )
}
