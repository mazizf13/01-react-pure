export default function FormSplitBill({ friend }) {
  return (
    <form action="" className="form-split-bill">
      <h2>Patungan Bareng {friend.name}</h2>

      <label htmlFor="">💵 Total Biaya</label>
      <input type="text" />

      <label htmlFor="">🙋‍♀️ Tagihan Kamu</label>
      <input type="text" />

      <label htmlFor="">💰 Tagihan {friend.name}</label>
      <input type="text" disabled />

      <label htmlFor="">🤑 Ditalangin sama</label>
      <select name="" id="">
        <option value="user">Kamu</option>
        <option value="friend">{friend.name}</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
