// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mockCategoryTreeDictionary = () => ({
  23: {
    id: 23,
    parent_id: 0,
    name: 'Household Items',
    is_visible: true,
    depth: 0,
    path: [],
    children: [
      {
        id: 18,
        parent_id: 23,
        name: 'Bath',
        is_visible: true,
        depth: 1,
        path: [23],
        children: [
          {
            id: 24,
            parent_id: 18,
            name: 'Bath - Exclusives',
            is_visible: true,
            depth: 2,
            path: [23, 18],
            children: [],
            url: '/bath/bath-exclusives/'
          }
        ],
        url: '/household-items/bath/'
      },
      {
        id: 19,
        parent_id: 23,
        name: 'Garden',
        is_visible: true,
        depth: 1,
        path: [23],
        children: [],
        url: '/household-items/garden/'
      },
      {
        id: 25,
        parent_id: 23,
        name: 'Clothes',
        is_visible: true,
        depth: 1,
        path: [23],
        children: [],
        url: '/household-items/clothes/'
      },
      {
        id: 21,
        parent_id: 23,
        name: 'Kitchen',
        is_visible: true,
        depth: 1,
        path: [23],
        children: [],
        url: '/household-items/kitchen/'
      },
      {
        id: 27,
        parent_id: 23,
        name: 'Others ',
        is_visible: true,
        depth: 1,
        path: [23],
        children: [],
        url: '/household-items/others/'
      }
    ],
    url: '/household-items/'
  },
  18: {
    id: 18,
    parent_id: 23,
    name: 'Bath',
    is_visible: true,
    depth: 1,
    path: [23],
    children: [
      {
        id: 24,
        parent_id: 18,
        name: 'Bath - Exclusives',
        is_visible: true,
        depth: 2,
        path: [23, 18],
        children: [],
        url: '/bath/bath-exclusives/'
      }
    ],
    url: '/household-items/bath/'
  },
  24: {
    id: 24,
    parent_id: 18,
    name: 'Bath - Exclusives',
    is_visible: true,
    depth: 2,
    path: [23, 18],
    children: [],
    url: '/bath/bath-exclusives/'
  },
  19: {
    id: 19,
    parent_id: 23,
    name: 'Garden',
    is_visible: true,
    depth: 1,
    path: [23],
    children: [],
    url: '/household-items/garden/'
  },
  25: {
    id: 25,
    parent_id: 23,
    name: 'Clothes',
    is_visible: true,
    depth: 1,
    path: [23],
    children: [],
    url: '/household-items/clothes/'
  },
  21: {
    id: 21,
    parent_id: 23,
    name: 'Kitchen',
    is_visible: true,
    depth: 1,
    path: [23],
    children: [],
    url: '/household-items/kitchen/'
  },
  27: {
    id: 27,
    parent_id: 23,
    name: 'Others ',
    is_visible: true,
    depth: 1,
    path: [23],
    children: [],
    url: '/household-items/others/'
  },
  22: {
    id: 22,
    parent_id: 0,
    name: 'Utility',
    is_visible: true,
    depth: 0,
    path: [],
    children: [
      {
        id: 20,
        parent_id: 22,
        name: 'Publications',
        is_visible: true,
        depth: 1,
        path: [22],
        children: [],
        url: '/utility/publications/'
      }
    ],
    url: '/utility/'
  },
  20: {
    id: 20,
    parent_id: 22,
    name: 'Publications',
    is_visible: true,
    depth: 1,
    path: [22],
    children: [],
    url: '/utility/publications/'
  }
});
