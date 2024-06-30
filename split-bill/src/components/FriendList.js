import Friend from "./Friend";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={index} />
      ))}
    </ul>
  );
}
