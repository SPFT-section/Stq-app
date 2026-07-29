import { useLocalStorage } from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

export const useUserStore = () => {
  const [profile, setProfile] = useLocalStorage('stq-user-profile', {
    id: uuidv4(),
    displayName: 'User',
    avatar: '',
    joinedAt: Date.now(),
  });

  const updateProfile = (data) => {
    setProfile((prev) => ({
      ...prev,
      ...data,
      updatedAt: Date.now(),
    }));
  };

  const getStats = (novels) => {
    const totalNovels = novels?.length || 0;
    const totalChapters = novels?.reduce(
      (sum, novel) => sum + (novel.chapters?.length || 0),
      0
    );
    const totalWords = novels?.reduce(
      (sum, novel) =>
        sum +
        (novel.chapters?.reduce(
          (s, chapter) =>
            s + (chapter.content?.split(/\s+/).filter(Boolean).length || 0),
          0
        ) || 0),
      0
    );

    return {
      totalNovels,
      totalChapters,
      totalWords,
    };
  };

  return {
    profile,
    updateProfile,
    getStats,
  };
};
