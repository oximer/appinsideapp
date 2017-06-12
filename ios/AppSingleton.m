//
//  AppSingleton.m
//  appinsideapp
//
//  Created by Augusto Reis on 12/06/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "AppSingleton.h"

@implementation AppSingleton

+(instancetype)shared {
  
  static AppSingleton *sharedManager = nil;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    sharedManager = [[self alloc]init];
  });
  
  return sharedManager;
  
}

- (instancetype)init
{
  self = [super init];
  if (self) {
    self.businessView = nil;
  }
  return self;
}


@end
