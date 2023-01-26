import { createSelector } from "@ngrx/store";
import { FireTracAppState } from "../../app-state";

export const selectFeature = (state: FireTracAppState) => state.auth;

//memoized stream of user object 
export const loggedInUser = createSelector(selectFeature, (state) => state.user?.firstName || "No Logged In User");