// Job interface - flexible structure to match your existing database schema
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  locationType?: 'Remote' | 'Hybrid' | 'On-site' | string;
  type?: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | string;
  department?: string;
  experience?: string;
  salary?: {
    min?: number;
    max?: number;
    currency?: string;
    period?: string;
  };
  description?: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
  skills?: string[];
  datePosted?: string;
  applicationDeadline?: string;
  isActive?: boolean;
  applicationUrl?: string;
  companyLogo?: string;
  tags?: string[];
  [key: string]: any; // Allow additional fields from your database
}

// API configuration - update this when you have your endpoint
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'; // Update with your actual API URL
const JOBS_ENDPOINT = `${API_BASE_URL}/jobs`; // Update with your actual endpoint

// Job API service - connects to your existing database
export class JobAPI {
  // Fetch all jobs from your database
  static async getAllJobs(): Promise<Job[]> {
    try {
      // TODO: Replace with your actual API endpoint when available
      const response = await fetch(JOBS_ENDPOINT);
      if (!response.ok) throw new Error('Failed to fetch jobs');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      // Return empty array for now - remove this when API is ready
      return [];
    }
  }

  // Search jobs with query
  static async searchJobs(query: string): Promise<Job[]> {
    try {
      // TODO: Update with your search endpoint
      const response = await fetch(`${JOBS_ENDPOINT}/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Failed to search jobs');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching jobs:', error);
      return [];
    }
  }

  // Filter jobs with various criteria
  static async filterJobs(filters: {
    location?: string;
    department?: string;
    experience?: string;
    type?: string;
    locationType?: string;
    salaryMin?: number;
    salaryMax?: number;
    [key: string]: any;
  }): Promise<Job[]> {
    try {
      // Build query string from filters
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, String(value));
        }
      });
      
      // TODO: Update with your filter endpoint
      const response = await fetch(`${JOBS_ENDPOINT}?${queryParams.toString()}`);
      if (!response.ok) throw new Error('Failed to filter jobs');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error filtering jobs:', error);
      return [];
    }
  }

  // Get single job by ID
  static async getJobById(id: string): Promise<Job | null> {
    try {
      // TODO: Update with your single job endpoint
      const response = await fetch(`${JOBS_ENDPOINT}/${id}`);
      if (!response.ok) throw new Error('Failed to fetch job');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching job:', error);
      return null;
    }
  }

  // Apply to a job
  static async applyToJob(jobId: string, applicationData: any): Promise<boolean> {
    try {
      // TODO: Update with your application endpoint
      const response = await fetch(`${JOBS_ENDPOINT}/${jobId}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });
      return response.ok;
    } catch (error) {
      console.error('Error applying to job:', error);
      return false;
    }
  }
}

// Utility functions for formatting
export class JobUtils {
  static formatSalary(salary?: Job['salary']): string {
    if (!salary) return 'Salary not specified';
    
    const { min, max, currency = 'USD', period = 'yearly' } = salary;
    
    if (!min && !max) return 'Salary negotiable';
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    const periodText = period === 'yearly' ? '/year' : 
                      period === 'monthly' ? '/month' : 
                      period === 'hourly' ? '/hour' : '';

    if (min && max) {
      if (min === max) {
        return `${formatter.format(min)}${periodText}`;
      }
      return `${formatter.format(min)} - ${formatter.format(max)}${periodText}`;
    }
    
    if (min) return `From ${formatter.format(min)}${periodText}`;
    if (max) return `Up to ${formatter.format(max)}${periodText}`;
    
    return 'Salary not specified';
  }

  static formatDate(dateString?: string): string {
    if (!dateString) return '';
    
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - date.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) return 'Today';
      if (diffDays === 1) return 'Yesterday';
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
      
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    } catch {
      return dateString;
    }
  }

  static getLocationTypeIcon(locationType?: string): string {
    switch (locationType?.toLowerCase()) {
      case 'remote': return '🌍';
      case 'hybrid': return '🏠';
      case 'on-site': 
      case 'onsite': return '🏢';
      default: return '📍';
    }
  }

  static getExperienceColor(experience?: string): string {
    switch (experience?.toLowerCase()) {
      case 'entry level':
      case 'junior': return 'text-green-600';
      case 'mid level':
      case 'intermediate': return 'text-blue-600';
      case 'senior level':
      case 'senior': return 'text-purple-600';
      case 'executive':
      case 'lead': return 'text-red-600';
      default: return 'text-gray-600';
    }
  }
}