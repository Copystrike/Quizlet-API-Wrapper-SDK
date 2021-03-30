export interface Profile {
    canAccessBulkImportTool:     boolean;
    folderPrices:                FolderPrices;
    hasVisibleStudySessions:     boolean;
    isReportingFlowBlocked:      boolean;
    numClasses:                  number;
    numCreated:                  number;
    numFolders:                  number;
    numPurchases:                number;
    shouldShowOnlineIndicator:   boolean;
    tabsPermissions:             TabsPermissions;
    title:                       string;
    user:                        User;
    shouldShowContentSearchText: boolean;
    sortOption:                  string;
}

export interface FolderPrices {
}

export interface TabsPermissions {
    admin:      boolean;
    bookmarked: boolean;
    created:    boolean;
    folders:    boolean;
    purchases:  boolean;
    recent:     boolean;
    sets:       boolean;
    studied:    boolean;
}

export interface User {
    id:                                     number;
    username:                               string;
    timestamp:                              number;
    lastModified:                           number;
    type:                                   number;
    isLocked:                               boolean;
    _imageUrl:                              string;
    timeZone:                               string;
    birthYear?:                             number;
    birthMonth?:                            number;
    birthDay?:                              number;
    isConfirmed?:                           boolean;
    selfIdentifiedTeacherStatus?:           number;
    profileImageId?:                        number;
    email?:                                 string;
    _hasPassword?:                          boolean;
    _hasFacebook?:                          boolean;
    _hasGoogle?:                            boolean;
    _hasApple?:                             boolean;
    _canChangeUsername?:                    boolean;
    _canSendDataFromGTMToAdNetworks?:       boolean;
    _isEligibleForFreeTrial?:               boolean;
    _isEligibleForStudentReferralsProgram?: boolean;
    _isUnderAge?:                           boolean;
    _isUnderAgeForAds?:                     boolean;
    _isUnderAgeOrInCoppaTransition?:        boolean;
    _needsChildDirectedTreatment?:          boolean;
    isSelfLearner?:                         boolean;
    _hasOptedIntoFreeOfflinePromo?:         boolean;
    shouldTriggerStudyStreak?:              boolean;
    webLocale?:                             string;
    mobileLocale?:                          string;
    userLocalePreference?:                  null;
    srsNotificationTime?:                   number;
    srsEmailNotificationsEnabled?:          boolean;
    srsPushNotificationsEnabled?:           boolean;
    isVerified?:                            boolean;
    verifiedCreatorWebsiteLinkURL?:         null;
    verifiedCreatorDescription?:            null;
    firstName?:                             string;
    lastName?:                              string;
}