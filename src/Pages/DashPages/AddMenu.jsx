import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import useUserData from '../../Hooks/useUserData';

const AddMenu = () => {
  const { role } = useUserData()
  const token = localStorage.getItem('access-token');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const title = data.title 
    const image = data.image 
    const price = parseFloat(data.price)
    const type = data.type 
    const description = data.description 
    const menuItem = {
       title, image, price, type, description
    };

    try {
      const res = await axios.post('https://petuk-palace-server.vercel.app/add-menu', menuItem,
        {
          headers: {Authorization: `Bearer ${token}`}
        }
      )
      if (res.data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Menu Added',
          text: 'Your new menu item has been added successfully!',
          confirmButtonColor: '#18181B'
        });
        reset();
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong while adding the menu item.'
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Menu Item</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Title"
            {...register('title', { required: 'Title is required' })}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        {/* Image URL */}
        <div>
          <input
            type="text"
            placeholder="Image URL"
            {...register('image', { required: 'Image URL is required' })}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>

        {/* Price */}
        <div>
          <input
            type="number"
            step="0.01"
            placeholder="Price"
            {...register('price', {
              required: 'Price is required',
              min: { value: 0, message: 'Price must be positive' }
            })}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        {/* Category */}
        <div>
          <input
            type="text"
            placeholder="Category (e.g. Burger, Pizza)"
            {...register('type', { required: 'Category is required' })}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        {/* Description */}
        <div>
          <textarea
            placeholder="Description "
            {...register('description', {required: 'Description is required'})}
            className="w-full px-4 py-2 border rounded h-24 resize-none"
          ></textarea>
        </div>

        {/* Submit */}
       <button
            type="submit"
            className={`px-6 py-2 rounded transition ${
              role === 'admin'
                ? 'bg-black text-white hover:bg-gray-800 cursor-pointer'
                : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
            disabled={role !== 'admin'}
          >
            Add Menu Item
        </button>

          {role !== 'admin' && (
            <p className="text-sm text-red-500 mt-2">Only admins can add menu items.</p>
          )}

      </form>
    </div>
  );
};

export default AddMenu;
