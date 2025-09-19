type Contact = {
  id: number;
  name: string;
  image: string;
  online: boolean;
};

const contacts: Contact[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Contact ${i + 1}`,
  image: `https://randomuser.me/api/portraits/men/${i + 10}.jpg`,
  online: Math.random() > 0.5, // এলোমেলোভাবে online/offline
}));

export default function SidebarRight() {
  return (
    <aside className="p-4 h-full overflow-y-auto w-64 ">
      <div className="font-bold mb-3">Contacts</div>

      {contacts.map((c) => (
        <div
          key={c.id}
          className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
        >
          {/* Profile image with status dot */}
          <div className="relative">
            <img
              src={c.image}
              alt={c.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            {/* Online status dot */}
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 ${
                c.online ? "bg-green-500" : "bg-gray-400"
              }`}
            />
          </div>

          {/* Name */}
          <div className="text-sm">{c.name}</div>
        </div>
      ))}
    </aside>
  );
}
