const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 max-w-[1100px] text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Alex Esterkin. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
