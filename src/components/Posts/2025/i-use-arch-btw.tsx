import { Entry, EntryTitle, EntryDate, EntryBody } from '../UI';

export const meta = {
  id: 'i-use-arch-btw',
  title: 'I use Arch BTW',
  date: 'August 9, 2025',
};

const Post = () => (
  <Entry id={meta.id}>
    <EntryTitle>{meta.title}</EntryTitle>
    <EntryDate>{meta.date}</EntryDate>
    <EntryBody>Coming Soon</EntryBody>
  </Entry>
);

export default Post;
