
import { useState } from "react";
import { Calendar, Clock, Camera, ChefHat, MapPin, User, Mail, Phone, MessageSquare } from "lucide-react";

interface BookingSystemProps {
  service: 'photography' | 'cooking';
  onClose: () => void;
}

const BookingSystem = ({ service, onClose }: BookingSystemProps) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    serviceType: '',
    date: '',
    time: '',
    duration: '',
    location: '',
    guestCount: '',
    specialRequests: '',
    contactInfo: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const serviceOptions = {
    photography: [
      { id: 'portrait', name: 'Portrait Session', duration: '1-2 hours', price: '$150' },
      { id: 'event', name: 'Event Photography', duration: '4-6 hours', price: '$400' },
      { id: 'family', name: 'Family Portraits', duration: '1 hour', price: '$120' },
      { id: 'wedding', name: 'Wedding Photography', duration: '8 hours', price: '$800' }
    ],
    cooking: [
      { id: 'private-chef', name: 'Private Chef Service', duration: '3-4 hours', price: '$200' },
      { id: 'cooking-class', name: 'Cooking Class', duration: '2 hours', price: '$80' },
      { id: 'catering', name: 'Event Catering', duration: 'Full day', price: '$300+' },
      { id: 'meal-prep', name: 'Weekly Meal Prep', duration: '4 hours', price: '$250' }
    ]
  };

  const currentOptions = serviceOptions[service];

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setBookingData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setBookingData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', bookingData);
    // Handle booking submission
    alert('Booking request submitted! Dora will contact you within 24 hours.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {service === 'photography' ? (
                <Camera className="w-8 h-8 text-orange-600" />
              ) : (
                <ChefHat className="w-8 h-8 text-orange-600" />
              )}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Book {service === 'photography' ? 'Photography' : 'Cooking'} Service
                </h2>
                <p className="text-gray-600">Step {step} of 3</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step > stepNum ? 'bg-orange-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Choose Your Service</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      bookingData.serviceType === option.id
                        ? 'border-orange-600 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                    onClick={() => handleInputChange('serviceType', option.id)}
                  >
                    <h4 className="font-semibold text-gray-900">{option.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{option.duration}</p>
                    <p className="text-lg font-bold text-orange-600 mt-2">{option.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Schedule & Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Preferred Time
                  </label>
                  <select
                    value={bookingData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Location
                </label>
                <input
                  type="text"
                  value={bookingData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Enter address or location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {service === 'cooking' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    value={bookingData.guestCount}
                    onChange={(e) => handleInputChange('guestCount', e.target.value)}
                    placeholder="How many people?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Special Requests
                </label>
                <textarea
                  value={bookingData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  placeholder="Any special requirements or preferences?"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={bookingData.contactInfo.name}
                    onChange={(e) => handleInputChange('contactInfo.name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={bookingData.contactInfo.email}
                    onChange={(e) => handleInputChange('contactInfo.email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={bookingData.contactInfo.phone}
                    onChange={(e) => handleInputChange('contactInfo.phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Booking Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Booking Summary</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><strong>Service:</strong> {currentOptions.find(o => o.id === bookingData.serviceType)?.name}</p>
                  <p><strong>Date:</strong> {bookingData.date}</p>
                  <p><strong>Time:</strong> {bookingData.time}</p>
                  <p><strong>Location:</strong> {bookingData.location}</p>
                  {bookingData.guestCount && <p><strong>Guests:</strong> {bookingData.guestCount}</p>}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="p-6 border-t border-gray-100 flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          )}
          
          <div className="ml-auto">
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={step === 1 && !bookingData.serviceType}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Submit Booking
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;
