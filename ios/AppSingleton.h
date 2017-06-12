//
//  AppSingleton.h
//  appinsideapp
//
//  Created by Augusto Reis on 12/06/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "BusinessView.h"

@interface AppSingleton : NSObject

@property(nonatomic, retain)BusinessView *businessView;

+ (instancetype)shared;

@end
