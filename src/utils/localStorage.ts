
const STORAGE_KEYS = {
  USER_PROGRESS: 'youthrise_user_progress',
  COMPLETED_LESSONS: 'youthrise_completed_lessons',
  BOOKMARKED_OPPORTUNITIES: 'youthrise_bookmarked_opportunities',
  EVENT_REGISTRATIONS: 'youthrise_event_registrations',
  USER_BADGES: 'youthrise_user_badges'
};

export interface UserProgress {
  trackId: string;
  progress: number;
  completedLessons: string[];
  lastUpdated: string;
}

export interface BookmarkedOpportunity {
  id: string;
  bookmarkedAt: string;
}

export interface EventRegistration {
  id: string;
  registeredAt: string;
}

// User Progress Functions
export const getUserProgress = (): UserProgress[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
  return stored ? JSON.parse(stored) : [];
};

export const updateUserProgress = (trackId: string, progress: number, completedLessons: string[]) => {
  const allProgress = getUserProgress();
  const existingIndex = allProgress.findIndex(p => p.trackId === trackId);
  
  const updatedProgress: UserProgress = {
    trackId,
    progress,
    completedLessons,
    lastUpdated: new Date().toISOString()
  };

  if (existingIndex >= 0) {
    allProgress[existingIndex] = updatedProgress;
  } else {
    allProgress.push(updatedProgress);
  }

  localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(allProgress));
};

export const getTrackProgress = (trackId: string): UserProgress | null => {
  const allProgress = getUserProgress();
  return allProgress.find(p => p.trackId === trackId) || null;
};

// Bookmarked Opportunities Functions
export const getBookmarkedOpportunities = (): BookmarkedOpportunity[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.BOOKMARKED_OPPORTUNITIES);
  return stored ? JSON.parse(stored) : [];
};

export const toggleBookmarkOpportunity = (opportunityId: string): boolean => {
  const bookmarks = getBookmarkedOpportunities();
  const existingIndex = bookmarks.findIndex(b => b.id === opportunityId);

  if (existingIndex >= 0) {
    bookmarks.splice(existingIndex, 1);
    localStorage.setItem(STORAGE_KEYS.BOOKMARKED_OPPORTUNITIES, JSON.stringify(bookmarks));
    return false; // Removed bookmark
  } else {
    bookmarks.push({
      id: opportunityId,
      bookmarkedAt: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEYS.BOOKMARKED_OPPORTUNITIES, JSON.stringify(bookmarks));
    return true; // Added bookmark
  }
};

export const isOpportunityBookmarked = (opportunityId: string): boolean => {
  const bookmarks = getBookmarkedOpportunities();
  return bookmarks.some(b => b.id === opportunityId);
};

// Event Registration Functions
export const getEventRegistrations = (): EventRegistration[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.EVENT_REGISTRATIONS);
  return stored ? JSON.parse(stored) : [];
};

export const toggleEventRegistration = (eventId: string): boolean => {
  const registrations = getEventRegistrations();
  const existingIndex = registrations.findIndex(r => r.id === eventId);

  if (existingIndex >= 0) {
    registrations.splice(existingIndex, 1);
    localStorage.setItem(STORAGE_KEYS.EVENT_REGISTRATIONS, JSON.stringify(registrations));
    return false; // Unregistered
  } else {
    registrations.push({
      id: eventId,
      registeredAt: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEYS.EVENT_REGISTRATIONS, JSON.stringify(registrations));
    return true; // Registered
  }
};

export const isEventRegistered = (eventId: string): boolean => {
  const registrations = getEventRegistrations();
  return registrations.some(r => r.id === eventId);
};

// User Badges Functions
export const getUserBadges = (): string[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.USER_BADGES);
  return stored ? JSON.parse(stored) : ['welcome'];
};

export const addUserBadge = (badge: string) => {
  const badges = getUserBadges();
  if (!badges.includes(badge)) {
    badges.push(badge);
    localStorage.setItem(STORAGE_KEYS.USER_BADGES, JSON.stringify(badges));
  }
};

export const clearAllUserData = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};
