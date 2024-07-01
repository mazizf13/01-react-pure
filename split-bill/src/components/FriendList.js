import Friend from "./Friend";

export default function FriendList({ friends, onSelected, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend
          friend={friend}
          key={index}
          onSelected={onSelected}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
