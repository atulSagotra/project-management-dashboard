const avatars = [
  '/avatar1.png',
  '/avatar2.png',
  '/avatar3.png',
  '/avatar4.png',
];

export default function AvatarGroup() {
  return (
    <div className="flex -space-x-3">
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="w-8 h-8 rounded-full border-2 border-white shadow"
        />
      ))}
      <span className="w-8 h-8 bg-primary text-white text-xs flex items-center justify-center rounded-full border-2 border-white shadow">
        +2
      </span>
    </div>
  );
}
