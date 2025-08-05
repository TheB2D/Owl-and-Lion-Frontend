"use client"

import { useState } from "react"
import { LoginScreen } from "@/components/login-screen"
import { StudentView } from "@/components/student-view"
import { TutorView } from "@/components/tutor-view"

export type UserRole = "student" | "tutor" | null

export interface Student {
  student_id: string
  primary_disability: string
  accommodations_needed: string[]
  learning_preferences: {
    style: string
    format: string
    modality: string
  }
  availability: Array<{
    day: string
    start_time: string
    end_time: string
  }>
  preferred_subjects: string[]
  additional_info: string
  uploaded_files?: File[]
}

export default function Home() {
  const [userRole, setUserRole] = useState<UserRole>(null)
  const [students, setStudents] = useState<Student[]>([])
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null)

  const handleLogin = (role: UserRole) => {
    setUserRole(role)
  }

  const handleStudentRegistration = (studentData: Student) => {
    setStudents((prev) => [...prev, studentData])
  }

  const handleLogout = () => {
    setUserRole(null)
    setCurrentStudent(null)
  }

  if (!userRole) {
    return <LoginScreen onLogin={handleLogin} />
  }

  if (userRole === "student") {
    return <StudentView onRegistration={handleStudentRegistration} onLogout={handleLogout} />
  }

  return (
    <TutorView
      students={students}
      currentStudent={currentStudent}
      onStudentSelect={setCurrentStudent}
      onLogout={handleLogout}
    />
  )
}
