import { LandingContent } from '@/components/common/LandingContent';
import { LandingHero } from '@/components/common/LandingHero';
import { LandingNavbar } from '@/components/common/LandingNavbar';

export default function LandingPage() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
