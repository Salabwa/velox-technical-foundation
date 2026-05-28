export type Creator = {
  id: string;
  creatorName: string;
  platform: string;
  profileUrl?: string;
  country?: string;
  city?: string;
  niche?: string;
  status?: string;
  notes?: string;
};

export type CreatorMetrics = {
  creatorId: string;
  followerCount?: number;
  averageViews?: number;
  averageLikes?: number;
  averageComments?: number;
  averageShares?: number;
  postingFrequency?: string;
  engagementRate?: number;
  growthRate?: number;
};

export type CreatorScore = {
  creatorId: string;
  growthScore: number;
  engagementQualityScore: number;
  consistencyScore: number;
  brandFitScore: number;
  monetizationPotentialScore: number;
  riskScore: number;
  overallVeloxScore: number;
  scoreLabel: string;
  scoreNotes: string;
};

export type CreatorReport = {
  id: string;
  creatorId: string;
  reportTitle: string;
  reportSummary: string;
  strategicRecommendation: string;
};

