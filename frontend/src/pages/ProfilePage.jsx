import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import authService from "../services/auth.service";

import ProfileCard from "../components/profile/ProfileCard";
import UpdateProfileForm from "../components/profile/UpdateProfileForm";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";
import ProfileSkeleton from "../components/profile/ProfileSkeleton";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
  try {
    setLoading(true);

    const data = await authService.me();

    setUser(data);
  } finally {
    setLoading(false);
  }
};

  if (loading) {
  return (
    <DashboardLayout>
      <ProfileSkeleton />
    </DashboardLayout>
  );
}

  if (!user) return null;
  return (
    <DashboardLayout>

      <h1 className="mb-8 text-4xl font-bold">
        My Profile
      </h1>

      <div className="space-y-8">

        <ProfileCard
          user={user}
        />

        <UpdateProfileForm
          user={user}
          refresh={loadProfile}
        />

        <ChangePasswordForm />

      </div>

    </DashboardLayout>
  );
};

export default ProfilePage;