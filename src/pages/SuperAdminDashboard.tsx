import { useState } from "react";
import { Settings, Users, Database, BarChart3, Shield, Globe, Plus, Edit, Trash2, Eye, Save, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { useTestimonials } from "@/hooks/useTestimonials";
import { useGallery } from "@/hooks/useGallery";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SuperAdminDashboard = () => {
  const { user } = useAuth();
  const { settings, updateSetting, loading: settingsLoading } = useSiteSettings();
  const { testimonials, fetchTestimonials } = useTestimonials();
  const { gallery, fetchGallery } = useGallery();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [editingSettings, setEditingSettings] = useState<Record<string, string>>({});

  const handleUpdateSetting = async (key: string, value: string) => {
    const success = await updateSetting(key, value);
    if (success) {
      toast({
        title: "Setting Updated",
        description: "Setting has been updated successfully.",
      });
      setEditingSettings(prev => {
        const newState = { ...prev };
        delete newState[key];
        return newState;
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to update setting.",
        variant: "destructive",
      });
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'site-settings', label: 'Site Settings', icon: Settings },
    { id: 'testimonials', label: 'Testimonials', icon: Users },
    { id: 'gallery', label: 'Gallery', icon: Globe },
    { id: 'user-roles', label: 'User Roles', icon: Shield },
    { id: 'system', label: 'System', icon: Database }
  ];

  const settingsGroups = [
    {
      title: 'Hero Section',
      settings: [
        { key: 'hero_title', label: 'Hero Title' },
        { key: 'hero_subtitle', label: 'Hero Subtitle' },
        { key: 'hero_photos_count', label: 'Photos Count' }
      ]
    },
    {
      title: 'Brand Information',
      settings: [
        { key: 'brand_experience_years', label: 'Years of Experience' },
        { key: 'brand_description', label: 'Brand Description' }
      ]
    },
    {
      title: 'Statistics',
      settings: [
        { key: 'stats_clients_count', label: 'Clients Count' },
        { key: 'stats_events_count', label: 'Events Count' }
      ]
    },
    {
      title: 'Contact Information',
      settings: [
        { key: 'contact_email', label: 'Contact Email' },
        { key: 'contact_phone', label: 'Contact Phone' },
        { key: 'business_address', label: 'Business Address' }
      ]
    }
  ];

  if (settingsLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Super Admin Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Super Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.email}! Manage your entire platform.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Plus className="w-4 h-4 mr-2" />
                Quick Actions
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-2 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">1,234</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-green-50 text-green-600">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Gallery Items</p>
                    <p className="text-2xl font-bold text-gray-900">{gallery.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-orange-50 text-orange-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Testimonials</p>
                    <p className="text-2xl font-bold text-gray-900">{testimonials.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Site Settings</p>
                    <p className="text-2xl font-bold text-gray-900">{Object.keys(settings).length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Site Settings Tab */}
        {activeTab === 'site-settings' && (
          <div className="space-y-8">
            {settingsGroups.map((group) => (
              <div key={group.title} className="bg-white rounded-xl shadow-sm border">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {group.settings.map((setting) => (
                    <div key={setting.key} className="flex items-center gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {setting.label}
                        </label>
                        {editingSettings[setting.key] !== undefined ? (
                          setting.key.includes('description') ? (
                            <Textarea
                              value={editingSettings[setting.key]}
                              onChange={(e) => setEditingSettings(prev => ({
                                ...prev,
                                [setting.key]: e.target.value
                              }))}
                              className="w-full"
                            />
                          ) : (
                            <Input
                              value={editingSettings[setting.key]}
                              onChange={(e) => setEditingSettings(prev => ({
                                ...prev,
                                [setting.key]: e.target.value
                              }))}
                              className="w-full"
                            />
                          )
                        ) : (
                          <p className="text-gray-900 p-2 bg-gray-50 rounded">
                            {settings[setting.key] || 'Not set'}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {editingSettings[setting.key] !== undefined ? (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleUpdateSetting(setting.key, editingSettings[setting.key])}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Save className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setEditingSettings(prev => {
                                const newState = { ...prev };
                                delete newState[setting.key];
                                return newState;
                              })}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingSettings(prev => ({
                              ...prev,
                              [setting.key]: settings[setting.key] || ''
                            }))}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">Manage Testimonials</h3>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Testimonial
              </Button>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Featured</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {testimonials.map((testimonial) => (
                    <TableRow key={testimonial.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </TableCell>
                      <TableCell>{testimonial.service}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          testimonial.is_featured 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {testimonial.is_featured ? 'Featured' : 'Regular'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          testimonial.is_active 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {testimonial.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">Manage Gallery</h3>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Image
              </Button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {gallery.map((item) => (
                  <div key={item.id} className="border rounded-lg overflow-hidden">
                    <img 
                      src={item.image_url} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          item.is_hero 
                            ? 'bg-orange-100 text-orange-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {item.is_hero ? 'Hero' : item.category}
                        </span>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminDashboard;