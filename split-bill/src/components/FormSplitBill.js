export default function FormSplitBill({ selectedFriend }) {
  return (
    <form action="" className="form-split-bill">
      <h2>Patungan Bareng {selectedFriend.name}</h2>

      <label htmlFor="">💵 Total Biaya</label>
      <input type="text" />

      <label htmlFor="">🙋‍♀️ Tagihan Kamu</label>
      <input type="text" />

      <label htmlFor="">💰 Tagihan {selectedFriend.name}</label>
      <input type="text" disabled />

      <label htmlFor="">🤑 Ditalangin sama</label>
      <select name="" id="">
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
