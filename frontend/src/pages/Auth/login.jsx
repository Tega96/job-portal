import { useState } from 'react';
import { memo } from 'react';
import {motion} from 'framer-motion';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [formState, setFormState] = useState({
    loading: false, 
    errors: {}, 
    showPassword: false,
    success: false
  });

  // Validation functions
  const validateEmail = (email) => {

  };
  const validatePassword = (password) => {

  };

  // Handle input changes
  const handleInputChange = (e) => {

  };

  const validateForm = () => {

  };

  const handleSubmit = async (e) => {

  };


  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=""
      >
        <div className="">
          <h2 className="">Welcome Back</h2>
          <p className="">Sign in to your JobPortal account</p>
        </div>

        <form onSubmit={handleSubmit} className="">
          {/** Email */}
          <div className="">
            <label htmlFor="email" className="">
              Email Address
            </label>
            <div className="">
              <Mail className="" />
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  formState.errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-color`}
                placeholder="Enter your email"
              />
            </div>
            {formState.errors.email && (
              <p className="">
                <AlertCircle className="" />
                {formState.errors.email}
              </p>
            )}
          </div>

        </form>
      </motion.div>
    </div>
  );
};

export default memo(Login);