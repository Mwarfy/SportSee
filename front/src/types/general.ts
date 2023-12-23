export interface IKeyData {
  calorieCount: number;
  carbohydrateCount: number;
  lipidCount: number;
  proteinCount: number;
}

export interface IUserInfos {
  age: number;
  firstName: string;
  lastName: string;
}

export interface IUser {
  data: {
    id: number;
    keyData: IKeyData;
    userInfos: IUserInfos;
    todayScore: number;
  };
}
export interface IActivityGraph {
  calories: number;
  day: string;
  kilogram: number;
}

export interface ISessionGraph {
  day: number;
  sessionLength: number;
}

export interface IPerformanceGraph {
  value: number;
  kind: number;
}
export interface IPerformanceKind {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}

export interface IActivity {
  data: {
    sessions: IActivityGraph[];
  };
}
export interface ISessions {
  data: {
    sessions: ISessionGraph[];
  };
}
export interface IPerformance {
  data: {
    data: IPerformanceGraph[];
    kind: IPerformanceKind;
  };
}
