import React, { useState, useEffect } from 'react';
import { postData, getData } from './apisSrvice';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({
    clientId: 0,
    createdBy: '',
    createdId: 0,
    title: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getData();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData(newItem);
      fetchData(); // Refresh data after posting
      setNewItem({ clientId: 0, createdBy: '', createdId: 0, title: '' }); // Reset form
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="clientId"
          value={newItem.clientId}
          onChange={handleInputChange}
          placeholder="Client ID"
        />
        <input
          type="text"
          name="createdBy"
          value={newItem.createdBy}
          onChange={handleInputChange}
          placeholder="Created By"
        />
        <input
          type="number"
          name="createdId"
          value={newItem.createdId}
          onChange={handleInputChange}
          placeholder="Created ID"
        />
        <input
          type="text"
          name="title"
          value={newItem.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Created By</th>
            <th>Created ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.clientId}</td>
              <td>{item.createdBy}</td>
              <td>{item.createdId}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
