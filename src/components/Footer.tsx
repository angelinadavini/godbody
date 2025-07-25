const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-sacred/20 to-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-divine to-accent bg-clip-text text-transparent mb-4">
              GODBODY
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Elevating minds, bodies, and spirits through divine wellness practices and sacred transformation.
            </p>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Programs</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-divine transition-colors">Divine Fitness</a></li>
              <li><a href="#" className="hover:text-divine transition-colors">Celestial Mindfulness</a></li>
              <li><a href="#" className="hover:text-divine transition-colors">Sacred Nutrition</a></li>
              <li><a href="#" className="hover:text-divine transition-colors">Wellness Coaching</a></li>
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-divine transition-colors">Forums</a></li>
              <li><a href="#" className="hover:text-divine transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-divine transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-divine transition-colors">Expert Blog</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-divine transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-divine transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-divine transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-divine transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 GODBODY. All rights reserved. Elevate your divine nature.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-divine transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-divine transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-divine transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;