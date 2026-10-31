import PremiumButton from '@/components/ui/PremiumButton';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-black">
      <div className="text-center">
        <h1 className="font-heading text-8xl md:text-9xl text-brand-white tracking-wider mb-4">404</h1>
        <p className="font-accent italic text-brand-gold text-xl mb-3">Page Not Found</p>
        <p className="text-brand-muted text-body-lg mb-10 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <PremiumButton label="Back to Home" href="/" variant="glass" />
      </div>
    </div>
  );
}
