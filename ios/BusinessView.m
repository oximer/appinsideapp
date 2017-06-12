//
//  BusinessView.m
//  appinsideapp
//
//  Created by Augusto Reis on 12/06/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "BusinessView.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTView.h>

@implementation BusinessView

-(void)showModule {
  
  RCTRootView *project2 = [self newViewWithModule:@"reactProject2"];
  project2.frame = CGRectMake(0, 0, 200, 200);
  
  [self addSubview:project2];
  
}

- (RCTRootView *)newViewWithModule:(NSString *)module {
  
  NSMutableDictionary *dictionary = [[NSMutableDictionary alloc]init];
  NSNumber *rootTag = [NSNumber numberWithInt:2];
  [dictionary setObject:rootTag forKey:@"rootTag"];
  
  
  NSString *path = [[NSBundle mainBundle]pathForResource:module ofType:@"jsbundle"];
  NSURL *jsCodeLocation = [[NSURL alloc]initWithString:path];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:module initialProperties:nil launchOptions:nil];
  
  return rootView;
  
}

@end
