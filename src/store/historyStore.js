import { useLocalStorage } from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

const initialHistory = [];

export const useHistoryStore = () => {
  const [history, setHistory] = useLocalStorage('stq-history', initialHistory);

  const addHistory = (novelId, chapterId, progress = 0, scrollPosition = 0) => {
    const existing = history.find(
      (item) => item.novelId === novelId && item.chapterId === chapterId
    );

    if (existing) {
      setHistory((prev) =>
        prev.map((item) =>
          item.id === existing.id
            ? {
                ...item,
                lastRead: Date.now(),
                progress,
                scrollPosition,
              }
            : item
        )
      );
    } else {
      const newHistory = {
        id: uuidv4(),
        novelId,
        chapterId,
        lastRead: Date.now(),
        progress,
        scrollPosition,
      };
      setHistory((prev) => [newHistory, ...prev]);
    }
  };

  const getHistory = (novelId) => {
    return history.filter((item) => item.novelId === novelId);
  };

  const getLatestHistory = () => {
    return history.sort((a, b) => b.lastRead - a.lastRead);
  };

  const getLastRead = (novelId) => {
    const novelHistory = getHistory(novelId);
    return novelHistory.length > 0
      ? novelHistory.sort((a, b) => b.lastRead - a.lastRead)[0]
      : null;
  };

  const clearHistory = () => {
    if (window.confirm('Clear all reading history?')) {
      setHistory([]);
      return true;
    }
    return false;
  };

  const removeHistory = (id) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const clearNovelHistory = (novelId) => {
    setHistory((prev) => prev.filter((item) => item.novelId !== novelId));
  };

  return {
    history,
    addHistory,
    getHistory,
    getLatestHistory,
    getLastRead,
    clearHistory,
    removeHistory,
    clearNovelHistory,
  };
};
