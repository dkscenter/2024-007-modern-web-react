import Image from 'next/image';
const ProfileImage = () => {

  return (
    <div className="relative overflow-hidden rounded-full w-72 h-72 mx-auto bg-gray-100 border-4 border-indigo-500">
      {/* <Image src={profile.image} width={300} height={300} alt={`${profile.firstname} ${profile.lastname}`} className="object-cover rounded-full" /> */}
    </div>
  );
};

export default ProfileImage;
