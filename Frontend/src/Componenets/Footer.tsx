import '../Style/FooterStyle.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} ReachInbox. All rights reserved.</span>
    </footer>
  );
}
