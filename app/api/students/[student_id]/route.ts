interface Availability {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  start_time: string;
  end_time: string;
}

interface LearningPreferences {
  format: string;
  style: string;
  modality: string;
}

interface StudentData {
  student_id: string;
  display_name: string;
  primary_disability: string;
  preferred_subjects: string[];
  accommodations_needed: string[];
  availability: Availability[];
  learning_preferences: LearningPreferences;
  additional_info: string;
}

export async function PUT(request: Request) {
  const studentId = request.url.split('/').pop();
  const body: StudentData = await request.json();

  const backendUrl = `https://customized-training.org/api/students/${studentId}`;

  try {
    const response = await fetch(backendUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return new Response(JSON.stringify(errorData), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const responseData = await response.json();
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error calling backend API:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}