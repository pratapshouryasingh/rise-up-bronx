
export const staticMentors = [
  {
    id: '1',
    name: 'Sarah Chen',
    expertise: ['Web Development', 'React', 'JavaScript'],
    bio: 'Full-stack developer with 8 years of experience at tech startups. Passionate about mentoring the next generation of developers.',
    avatar_url: '/placeholder.svg',
    rating: 4.9,
    total_mentees: 45,
    availability: 'Weekends',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    expertise: ['Mobile Development', 'iOS', 'Swift'],
    bio: 'Senior iOS developer at Apple with a focus on accessibility and user experience. Love helping youth build their first apps.',
    avatar_url: '/placeholder.svg',
    rating: 4.8,
    total_mentees: 32,
    availability: 'Evenings',
    location: 'Cupertino, CA'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    expertise: ['Data Science', 'Python', 'Machine Learning'],
    bio: 'Data scientist and researcher specializing in AI ethics. Committed to increasing diversity in STEM fields.',
    avatar_url: '/placeholder.svg',
    rating: 4.9,
    total_mentees: 28,
    availability: 'Flexible',
    location: 'Austin, TX'
  },
  {
    id: '4',
    name: 'David Kim',
    expertise: ['UX Design', 'Product Design', 'Figma'],
    bio: 'Product designer with experience at major tech companies. Passionate about human-centered design and mentorship.',
    avatar_url: '/placeholder.svg',
    rating: 4.7,
    total_mentees: 38,
    availability: 'Weekdays',
    location: 'Seattle, WA'
  }
];

export const staticLearningTracks = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build your first website',
    category: 'Programming',
    difficulty: 'beginner' as const,
    duration_weeks: 8,
    badge_reward: 'Web Developer',
    lessons: [
      { id: '1', title: 'Introduction to HTML', completed: true },
      { id: '2', title: 'CSS Styling Basics', completed: true },
      { id: '3', title: 'JavaScript Fundamentals', completed: false },
      { id: '4', title: 'Building Your First Website', completed: false }
    ],
    progress: 50
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Create mobile applications using React Native and learn app deployment',
    category: 'Programming',
    difficulty: 'intermediate' as const,
    duration_weeks: 12,
    badge_reward: 'Mobile Developer',
    lessons: [
      { id: '1', title: 'React Native Setup', completed: true },
      { id: '2', title: 'Building UI Components', completed: false },
      { id: '3', title: 'Navigation & State Management', completed: false },
      { id: '4', title: 'App Store Deployment', completed: false }
    ],
    progress: 25
  },
  {
    id: '3',
    title: 'Digital Marketing Basics',
    description: 'Master social media marketing, content creation, and brand building',
    category: 'Marketing',
    difficulty: 'beginner' as const,
    duration_weeks: 6,
    badge_reward: 'Digital Marketer',
    lessons: [
      { id: '1', title: 'Social Media Strategy', completed: false },
      { id: '2', title: 'Content Creation', completed: false },
      { id: '3', title: 'Analytics & Metrics', completed: false },
      { id: '4', title: 'Paid Advertising', completed: false }
    ],
    progress: 0
  },
  {
    id: '4',
    title: 'Entrepreneurship 101',
    description: 'Learn business fundamentals, pitch development, and startup strategies',
    category: 'Business',
    difficulty: 'intermediate' as const,
    duration_weeks: 10,
    badge_reward: 'Young Entrepreneur',
    lessons: [
      { id: '1', title: 'Business Model Canvas', completed: false },
      { id: '2', title: 'Market Research', completed: false },
      { id: '3', title: 'Pitch Development', completed: false },
      { id: '4', title: 'Funding & Investment', completed: false }
    ],
    progress: 0
  }
];

export const staticOpportunities = [
  {
    id: '1',
    title: 'Summer Tech Internship Program',
    description: 'Paid internship opportunity at leading tech companies for high school students',
    type: 'internship' as const,
    location: 'San Francisco Bay Area',
    date: '2024-06-15',
    external_link: 'https://example.com/tech-internship',
    created_at: '2024-01-15',
    deadline: '2024-03-01',
    requirements: ['16-18 years old', 'Basic programming knowledge', 'GPA 3.0+']
  },
  {
    id: '2',
    title: 'Youth Innovation Challenge',
    description: 'Pitch your startup idea and win up to $10,000 in seed funding',
    type: 'event' as const,
    location: 'Virtual & In-person',
    date: '2024-04-20',
    external_link: 'https://example.com/innovation-challenge',
    created_at: '2024-01-20',
    deadline: '2024-04-01',
    requirements: ['Ages 14-24', 'Original business idea', 'Team of 2-4 members']
  },
  {
    id: '3',
    title: 'STEM Scholarship for Underrepresented Youth',
    description: 'Full tuition scholarship for computer science and engineering programs',
    type: 'scholarship' as const,
    location: 'National',
    date: '2024-09-01',
    external_link: 'https://example.com/stem-scholarship',
    created_at: '2024-01-10',
    deadline: '2024-05-15',
    requirements: ['High school senior', 'Underrepresented minority', 'STEM field interest']
  },
  {
    id: '4',
    title: 'Junior Developer Position',
    description: 'Entry-level developer role with mentorship and growth opportunities',
    type: 'job' as const,
    location: 'Remote',
    date: '2024-03-01',
    external_link: 'https://example.com/junior-dev-job',
    created_at: '2024-02-01',
    deadline: '2024-02-28',
    requirements: ['Basic web development skills', 'Portfolio projects', 'Strong communication']
  }
];

export const staticEvents = [
  {
    id: '1',
    title: 'Youth Tech Meetup',
    description: 'Monthly gathering for young tech enthusiasts to network and learn',
    date: '2024-02-15',
    time: '6:00 PM - 8:00 PM',
    location: 'San Francisco',
    attendees: 45,
    category: 'Networking'
  },
  {
    id: '2',
    title: 'Coding Bootcamp Workshop',
    description: 'Intensive 3-day workshop covering web development fundamentals',
    date: '2024-02-22',
    time: '9:00 AM - 5:00 PM',
    location: 'Virtual',
    attendees: 120,
    category: 'Education'
  },
  {
    id: '3',
    title: 'Startup Pitch Competition',
    description: 'Present your business ideas to industry professionals and investors',
    date: '2024-03-05',
    time: '2:00 PM - 6:00 PM',
    location: 'Austin, TX',
    attendees: 80,
    category: 'Competition'
  }
];
