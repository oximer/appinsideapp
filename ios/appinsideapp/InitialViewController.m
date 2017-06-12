//
//  InitialViewController.m
//  appinsideapp
//
//  Created by Augusto Reis on 09/06/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "InitialViewController.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>


@interface InitialViewController ()

@end

@implementation InitialViewController

- (void)viewDidLoad {
    [super viewDidLoad];
 
  RCTRootView *project1 = [self newViewWithModule:@"reactProject1"];
  project1.frame = CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height);
  [self.view addSubview:project1];
  
}

- (RCTRootView *)newViewWithModule:(NSString *)module {
  
  NSMutableDictionary *dictionary = [[NSMutableDictionary alloc]init];
  NSNumber *rootTag = [NSNumber numberWithInt:2];
  [dictionary setObject:rootTag forKey:@"rootTag"];
  
  
  NSString *path = [[NSBundle mainBundle]pathForResource:module ofType:@"jsbundle"];
  NSURL *jsCodeLocation = [[NSURL alloc]initWithString:path];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:module initialProperties:dictionary launchOptions:dictionary];
  return rootView;
  
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
