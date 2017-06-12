//
//  BusinessModule.m
//  appinsideapp
//
//  Created by Augusto Reis on 12/06/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "BusinessModule.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTView.h>

#import "BusinessView.h"
#import "AppSingleton.h"

@implementation BusinessModule

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}



RCT_EXPORT_MODULE(BusinessModule)


RCT_CUSTOM_VIEW_PROPERTY(application, NSDictionary*, BusinessView*) {
  
  [[AppSingleton shared].businessView showModule];
  
}

- (RCTView *)view {
  
  [AppSingleton shared].businessView = [[BusinessView alloc]init]; ;
  return [AppSingleton shared].businessView;
  
}




@end
