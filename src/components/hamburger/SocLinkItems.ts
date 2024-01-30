import fbIcon from '../../assets/icons/hamburger/facebook-logo.svg';
import igIcon from '../../assets/icons/hamburger/instagram-logo.svg';

type SocLinkItem = {
  id: string;
  value: string;
  href: string;
  icon: string;
};

export const SocLinkItems: SocLinkItem[] = [
  { id: 'instagram', value: 'Instagram', href: 'https://www.instagram.com/studentskaunieutb/', icon: igIcon },
  { id: 'facebook', value: 'Facebook', href: 'https://www.facebook.com/events/752918923323142/?acontext=%7B%22event_action_history%22%3A[]%7D', icon: fbIcon }
];
