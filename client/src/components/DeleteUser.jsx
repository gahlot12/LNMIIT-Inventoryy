import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteUser = ({ user, setModalVisible ,setRefresh}) => {
  const navigate = useNavigate();
 
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalVisible(false);

    try {
      // Make a DELETE request to the '/deleteuser/:username' endpoint
      const response = await fetch(`${import.meta.env.VITE_REACT_API_HOST_URL}/deleteuser/${user.username}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        console.log('User deleted successfully!');
        toast.success(`Successfully Deleted ${user.username}!`, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'light',
        });
         setRefresh(true)
        // Redirect to a success page or reset the form
        // navigate('/success');
      } else {
        setError(data.error || 'Error deleting user');
        toast.error(error, {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      setError('Error deleting user');
      toast.error(error, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      console.error('Error deleting user:', error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center font-bold">
      <h1 className="text-[#CD1818] text-xl">
        Are you sure you want to DELETE {user.username} ?
      </h1>
      <div className="flex w-full items-center justify-around">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-[35%] bg-[#D83F31] hover:bg-[#CD1818] text-white font-bold py-2 px-4 rounded mt-4"
        >
          Delete
        </button>
        <button
          type="submit"
          onClick={() => setModalVisible(false)}
          className="w-[35%] bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
