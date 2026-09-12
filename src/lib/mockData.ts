export const MOCK_STUDENT = {
  id: 'student-1',
  name: 'Demo Student',
  rollNumber: '2100030001',
  program: 'B.Tech Computer Science',
  semester: 6,
  cgpa: 9.24,
  attendance: 87.5,
  creditsEarned: 142,
  activeBacklogs: 0
};

export const SEMESTER_COURSES = [
  { id: 'C1', code: 'CS3101', name: 'Artificial Intelligence', credits: 4, type: 'Core', grade: 'A', status: 'Completed' },
  { id: 'C2', code: 'CS3102', name: 'Web Technologies', credits: 4, type: 'Core', grade: 'O', status: 'Completed' },
  { id: 'C3', code: 'CS3103', name: 'Cloud Computing', credits: 3, type: 'Elective', grade: 'A+', status: 'In Progress' },
  { id: 'C4', code: 'HS3101', name: 'Professional Ethics', credits: 2, type: 'Humanities', grade: 'A', status: 'In Progress' },
];

export const EXAM_SCHEDULE = [
  { id: 'E1', subject: 'Artificial Intelligence', date: '2024-10-15', time: '09:00 AM - 12:00 PM', type: 'Mid Term', room: 'C-402' },
  { id: 'E2', subject: 'Web Technologies', date: '2024-10-17', time: '02:00 PM - 05:00 PM', type: 'Mid Term', room: 'C-405' },
  { id: 'E3', subject: 'Cloud Computing', date: '2024-10-19', time: '09:00 AM - 12:00 PM', type: 'Mid Term', room: 'Lab-2' },
];

export const TIMETABLE = [
  { day: 'Monday', time: '09:00 AM', subject: 'Artificial Intelligence', room: 'C-402', instructor: 'Dr. Sharma' },
  { day: 'Monday', time: '11:00 AM', subject: 'Web Technologies Lab', room: 'Lab-2', instructor: 'Prof. Reddy' },
  { day: 'Tuesday', time: '10:00 AM', subject: 'Cloud Computing', room: 'C-305', instructor: 'Dr. Kumar' },
  { day: 'Wednesday', time: '09:00 AM', subject: 'Professional Ethics', room: 'C-101', instructor: 'Prof. Rao' },
];

export const PAYMENTS = [
  { id: 'P1', description: 'Tuition Fee - Sem 6', amount: 125000, date: '2024-01-15', status: 'Paid', receipt: 'RCPT-8921' },
  { id: 'P2', description: 'Hostel Fee - Sem 6', amount: 45000, date: '2024-01-15', status: 'Paid', receipt: 'RCPT-8922' },
  { id: 'P3', description: 'Examination Fee - Sem 6', amount: 2500, date: '2024-09-01', status: 'Pending', receipt: null },
];

export const ADMIN_STUDENTS = [
  { id: 'S1', name: 'John Doe', roll: '2100030001', branch: 'CSE', year: 3, section: 'S1', attendance: 85 },
  { id: 'S2', name: 'Jane Smith', roll: '2100030002', branch: 'CSE', year: 3, section: 'S1', attendance: 92 },
  { id: 'S3', name: 'Alice Johnson', roll: '2100030003', branch: 'CSE', year: 3, section: 'S2', attendance: 78 },
  { id: 'S4', name: 'Bob Williams', roll: '2100030004', branch: 'ECE', year: 2, section: 'E1', attendance: 88 },
  { id: 'S5', name: 'Charlie Brown', roll: '2100030005', branch: 'ME', year: 4, section: 'M1', attendance: 95 },
];

export const ADMIN_SECTIONS = [
  { id: 'SEC1', name: 'CSE - Year 3 - Sec 1', strength: 65, averageAttendance: 84.5 },
  { id: 'SEC2', name: 'CSE - Year 3 - Sec 2', strength: 62, averageAttendance: 81.2 },
  { id: 'SEC3', name: 'ECE - Year 2 - Sec 1', strength: 58, averageAttendance: 88.0 },
];
